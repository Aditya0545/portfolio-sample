from pydantic import BaseModel
from typing import List, Optional
from datetime import date

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    github_url: Optional[str]
    live_url: Optional[str]
    image_url: Optional[str]

class Experience(BaseModel):
    id: int
    company: str
    position: str
    start_date: date
    end_date: Optional[date]
    description: str
    technologies: List[str]

class Achievement(BaseModel):
    id: int
    title: str
    description: str
    date: date
    url: Optional[str]

class Contact(BaseModel):
    email: str
    linkedin: Optional[str]
    github: Optional[str]
    twitter: Optional[str] 