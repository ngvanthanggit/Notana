package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Authentication service is fking strong now")
	})

	fmt.Println("Authentication service is starting...")

	if err := http.ListenAndServe(":4000", nil); err != nil {
		log.Fatal(err)
	}
}
