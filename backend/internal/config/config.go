package config

import "os"

type AuthConfig struct {
	Port        string
	JWTSecret   string
	DatabaseURL string
}

func LoadAuthConfig() AuthConfig {
	return AuthConfig{
		Port:        getEnv("PORT", "4000"),
		JWTSecret:   getEnv("JWT_SECRET", ""),
		DatabaseURL: getEnv("DB_URL", ""),
	}
}

func getEnv(key, fallback string) string {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fallback
	}
	return val
}
