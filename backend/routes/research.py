from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from crew_definition import ResearchCrew
from backend.database import get_db as db 
from datetime import datetime

router = APIRouter(prefix="/api/research", tags=["Research"])

class ResearchQuery(BaseModel):
    query: str

@router.post("/")
async def run_research(query: ResearchQuery):
    try:
        crew = ResearchCrew(verbose=True)
        result = crew.crew.kickoff(inputs={"text": query.query})
        await db().research_logs.insert_one({
            "query": query.query,
            "result": str(result),
            "timestamp": datetime.utcnow()
        })
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
