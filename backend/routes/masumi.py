from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.services.masumi_transaction import (
    verify_nft_ownership,
    check_payment_status,
    initiate_payment
)
from backend.models.payment_model import (
    VerifyAccessResponse,
    PaymentStatusResponse,
    InitiatePaymentResponse
)
from backend.database import get_db
from datetime import datetime

router = APIRouter(prefix="/api/masumi", tags=["Masumi"])

# ✅ Pydantic models
class AccessRequest(BaseModel):
    wallet: str
    collection: str

class WalletRequest(BaseModel):
    wallet: str

# ✅ /verify-access
@router.post("/verify-access", response_model=VerifyAccessResponse)
async def verify_access(payload: AccessRequest):
    try:
        wallet = payload.wallet
        collection = payload.collection

        await get_db().masumi_logs.insert_one({
            "wallet": wallet,
            "collection": collection,
            "action": "verify_access",
            "timestamp": datetime.utcnow()
        })

        return verify_nft_ownership(wallet, collection)

    except Exception as e:
        print(f"🚨 verify-access error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# ✅ /payment-status
@router.post("/payment-status", response_model=PaymentStatusResponse)
async def payment_status(payload: WalletRequest):
    try:
        wallet = payload.wallet

        await get_db().masumi_logs.insert_one({
            "wallet": wallet,
            "action": "payment_status_check",
            "timestamp": datetime.utcnow()
        })

        return check_payment_status(wallet)

    except Exception as e:
        print(f"🚨 payment-status error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# ✅ /pay-to-unlock
@router.post("/pay-to-unlock", response_model=InitiatePaymentResponse)
async def pay_to_unlock(payload: WalletRequest):
    try:
        wallet = payload.wallet

        await get_db().masumi_logs.insert_one({
            "wallet": wallet,
            "action": "pay_to_unlock",
            "timestamp": datetime.utcnow()
        })

        return initiate_payment(wallet)

    except Exception as e:
        print(f"🚨 pay-to-unlock error: {e}")
        raise HTTPException(status_code=500, detail=str(e))