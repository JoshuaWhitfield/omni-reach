from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.models.event_model import Event
from sqlalchemy import func

router = APIRouter(prefix="/api/crm", tags=["CRM"])

@router.get("/events")
async def get_event_feed():
    try:
        db = get_db()  # ✅ FIX: make sure you call the function
        events = await db.events.find().to_list(length=100)
        return events
    except Exception as e:
        print(f"🚨 /crm/events error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/summary")
async def get_campaign_stats():
    try:
        db = get_db()
        clicks = await db.events.count_documents({"event_type": "click"})
        conversions = await db.events.count_documents({"event_type": "conversion"})
        return {
            "clicks": clicks,
            "conversions": conversions
        }
    except Exception as e:
        print(f"🚨 /crm/summary error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    