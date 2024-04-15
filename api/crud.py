from fastapi import FastAPI, HTTPException


fake_data = [
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "revenue": 2500
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "revenue": 3800
    },
    {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "revenue": 4200
    },
    {
        "name": "Bob Williams",
        "email": "bob.williams@example.com",
        "revenue": 3100
    },
    {
        "name": "Emily Brown",
        "email": "emily.brown@example.com",
        "revenue": 2700
    },
    {
        "name": "Michael Davis",
        "email": "michael.davis@example.com",
        "revenue": 5000
    },
    {
        "name": "Olivia Garcia",
        "email": "olivia.garcia@example.com",
        "revenue": 4600
    },
    {
        "name": "James Rodriguez",
        "email": "james.rodriguez@example.com",
        "revenue": 4100
    },
    {
        "name": "Sophia Martinez",
        "email": "sophia.martinez@example.com",
        "revenue": 3800
    },
    {
        "name": "William Hernandez",
        "email": "william.hernandez@example.com",
        "revenue": 3500
    }
]

def get_authors(author_name:str):
    print(author_name)
    if (author_name):
        filtered = [item for item in fake_data if item["name"] == "John Doe"]
        if (len(filtered) == 0):
            raise HTTPException(status_code=404)
        return filtered
    else:
        # return all authors
        return fake_data