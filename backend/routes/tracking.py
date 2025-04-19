from fastapi import APIRouter, Request, HTTPException
from pydantic import BaseModel
from backend.database import get_db
import uuid
import datetime

router = APIRouter(prefix="/api/tracking", tags=["Tracking"])


class ClickEvent(BaseModel):
    campaign_id: str
    video_id: str
    persona_id: str

@router.post("/click")
async def log_click(req: Request):
    try:
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

        db = get_db()
        await db.events.insert_one(new_event)

        return {"status": "click logged", "event_id": new_event["id"]}
    except Exception as e:
        print(f"🚨 tracking/click error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
