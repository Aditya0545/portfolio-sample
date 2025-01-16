from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Project, Experience, Achievement, Contact
from datetime import date

router = APIRouter()

# Sample data (replace with database in production)
projects = [
    {
        "id": 1,
        "title": "E-Commerce Platform",
        "description": "Built a full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration using Stripe.",
        "technologies": ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Stripe API"],
        "github_url": "https://github.com/username/ecommerce-platform",
        "live_url": "https://ecommerce-demo.com",
        "image_url": "https://via.placeholder.com/800x600?text=E-Commerce+Platform"
    },
    {
        "id": 2,
        "title": "AI Image Recognition App",
        "description": "Developed a machine learning application that can identify objects in images using TensorFlow and deployed it as a web service.",
        "technologies": ["Python", "TensorFlow", "OpenCV", "Flask", "React", "AWS"],
        "github_url": "https://github.com/username/ai-image-recognition",
        "live_url": "https://ai-vision-app.com",
        "image_url": "https://via.placeholder.com/800x600?text=AI+Image+Recognition"
    },
    {
        "id": 3,
        "title": "Real-time Chat Application",
        "description": "Created a real-time chat application with features like private messaging, group chats, and file sharing using WebSocket technology.",
        "technologies": ["Python", "FastAPI", "WebSocket", "React", "Redis", "MongoDB"],
        "github_url": "https://github.com/username/realtime-chat",
        "live_url": "https://chat-app-demo.com",
        "image_url": "https://via.placeholder.com/800x600?text=Chat+Application"
    },
    {
        "id": 4,
        "title": "Task Management System",
        "description": "Designed and implemented a project management tool with features like task tracking, team collaboration, and automated notifications.",
        "technologies": ["Python", "Django", "React", "PostgreSQL", "Celery", "Docker"],
        "github_url": "https://github.com/username/task-manager",
        "live_url": "https://task-manager-demo.com",
        "image_url": "https://via.placeholder.com/800x600?text=Task+Management"
    }
]

# Sample achievements data
achievements = [
    {
        "id": 1,
        "title": "First Place - National Hackathon 2023",
        "description": "Won first place in a 48-hour hackathon for developing an innovative AI-powered solution for healthcare accessibility.",
        "date": date(2023, 11, 15),
        "url": "https://hackathon-2023.com/winners"
    },
    {
        "id": 2,
        "title": "AWS Certified Solutions Architect",
        "description": "Earned AWS Solutions Architect Professional certification, demonstrating expertise in designing distributed systems on AWS.",
        "date": date(2023, 8, 20),
        "url": "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
    },
    {
        "id": 3,
        "title": "Open Source Contribution Recognition",
        "description": "Recognized as a key contributor to TensorFlow, with multiple PRs merged that improved model performance by 25%.",
        "date": date(2023, 6, 10),
        "url": "https://github.com/tensorflow/tensorflow/pulls?q=author%3Ausername"
    },
    {
        "id": 4,
        "title": "Tech Conference Speaker",
        "description": "Delivered a keynote speech on 'The Future of AI in Web Development' at PyCon 2023, reaching an audience of 5000+ developers.",
        "date": date(2023, 5, 15),
        "url": "https://pycon.org/2023/speakers"
    },
    {
        "id": 5,
        "title": "Research Paper Publication",
        "description": "Published a paper on 'Efficient Deep Learning Models for Edge Devices' in the International Journal of Computer Science.",
        "date": date(2023, 3, 1),
        "url": "https://example.com/research-paper"
    },
    {
        "id": 6,
        "title": "Google Developer Expert",
        "description": "Selected as a Google Developer Expert for Machine Learning, recognizing technical expertise and community contributions.",
        "date": date(2022, 12, 1),
        "url": "https://developers.google.com/community/experts"
    },
    {
        "id": 7,
        "title": "Best Technical Blog Award",
        "description": "Received recognition for outstanding technical writing on AI and Python development, with over 100,000 monthly readers.",
        "date": date(2022, 9, 15),
        "url": "https://dev.to/username"
    },
    {
        "id": 8,
        "title": "Microsoft MVP Award",
        "description": "Awarded Microsoft Most Valuable Professional status for contributions to the developer community in AI and cloud technologies.",
        "date": date(2022, 7, 1),
        "url": "https://mvp.microsoft.com/profile"
    }
]

@router.get("/api/projects", response_model=List[Project])
async def get_projects():
    return projects

@router.get("/api/experiences")
async def get_experiences():
    # Add your experience data here
    pass

@router.get("/api/achievements", response_model=List[Achievement])
async def get_achievements():
    return achievements

@router.get("/api/contact")
async def get_contact():
    # Add your contact information here
    pass 