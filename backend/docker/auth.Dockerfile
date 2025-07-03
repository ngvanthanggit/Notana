# Build stage
FROM golang:1.24 AS builder

WORKDIR /app

# Copy go.mod and go.sum first for caching
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source
COPY . .

# Build the service binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /auth-service ./cmd/auth

# Run stage
FROM alpine:latest
WORKDIR /app

# Update and install security updates
RUN apk update && apk upgrade --no-cache

# Copy built binary from builder stage
COPY --from=builder /auth-service .

# Expose the port
EXPOSE 4000

# Command to run the binary
CMD ["./auth-service"]