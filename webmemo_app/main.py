from fastapi import FastAPI
from pydantic import BaseModel
from mangum import Mangum

class Memo(BaseModel):
    id: str
    content: str

memos = []

app = FastAPI()

@app.post("/memos")
def create_memo(memo: Memo):
    memos.append(memo)
    return {'message': '메모추가에 성공했습니다.'}

@app.get("/memos")
def read_memo():
    return memos

@app.put("/memo/{memo_id}")
def put_memo(memo_id: str, req_memo: Memo):
    for memo in memos:
        if memo.id == memo_id:
            memo.content = req_memo.content
            return {'message': '성공했습니다.'}
    return {'message': '그런 메모는 없습니다.'}

@app.delete("/memo/{memo_id}")
def delete_memo(memo_id: str):
    for index, memo in enumerate(memos):
        if memo.id == memo_id:
            memos.pop(index)
            return {'message': '성공했습니다.'}
    return {'message': '그런 메모는 없습니다.'}

# app.mount("/", StaticFiles(directory='static', html=True), name='static')


handler = Mangum(app)

