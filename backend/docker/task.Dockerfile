# build stage
FROM golang:1.24 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /task-service ./cmd/task

# Run stage
FROM alpine:latest

WORKDIR /app

COPY --from=builder /task-service .

EXPOSE 4001

CMD ["./task-service"]