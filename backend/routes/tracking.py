from fastapi import APIRouter, Request
from backend.database import get_db as db
import uuid
import datetime

router = APIRouter(prefix="/api/tracking", tags=["Tracking"])

@router.post("/click")
async def log_click(req: Request):
    data = await req.json()

    new_event = {
        "id": str(uuid.uuid4()),
        "campaign_id": data.get("campaign_id"),
        "video_id": data.get("video_id"),
        "persona_id": data.get("persona_id"),
        "event_type": "click",
        "created_at": datetime.datetime.utcnow(),
        "sent_to_ga": False
    }

    await db.events.insert_one(new_event)
    return {"status": "click logged", "event_id": new_event["id"]}
