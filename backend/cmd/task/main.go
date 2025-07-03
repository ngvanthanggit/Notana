package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Task manager service is fking strong now")
	})

	fmt.Println("Task manager service is starting...")

	if err := http.ListenAndServe(":4001", nil); err != nil {
		log.Fatal(err)
	}
}
