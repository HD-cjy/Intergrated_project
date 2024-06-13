from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

class Memo(BaseModel):
    id: str  # ID는 문자열로 정의
    content: str  # content로 수정

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

app.mount("/", StaticFiles(directory='static', html=True), name='static')
