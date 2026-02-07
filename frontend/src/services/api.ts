import type { Metrics, Products } from "../types";

const API_URL = "http://localhost:8000"; // for development only

export async function getMetrics(): Promise<Metrics> {
    const response = await fetch(
        `${API_URL}/metrics`,
        { 
            method: "GET" 
        }
    )

    if (!response.ok) throw new Error("Failed to fetch metrics");

    return response.json(); //function that returns the json as part of the response from the api, and converts it into to a javascript object
}

export async function getProducts(): Promise<Products[]> {
    const response = await fetch(
        `${API_URL}/products`,
        { 
            method: "GET" 
        }
    )

    if (!response.ok) throw new Error("Failed to fetch products");

    return response.json();
}