# from fastapi import FastAPI
# from pydantic import BaseModel

# app = FastAPI()

# class Item(BaseModel):
#     id:int
#     content:str
    
# items = ['맥북','아이폰','에어팟','애플펜슬']
# # @app.get("/items")
# # def read_items():
# #     return items

# @app.get("/items/{id}")
# def id_items(id):
#     return items[int(id)]


# @app.get("/items")
# def read_item(skip:int=0,limit:int=0):
#     return items[skip:skip+limit]
# #https://127.0.0.1:8080/items?skip=1&limit=2
# # 해석: 아이템 하나를 스킵하고 2개의 아이템을 보여주세요 

# @app.post ("/items")
# def post_item(item:Item):
#     items.append(item.content)
#     return '성공했습니다!'

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()
answer='SUNNY'

@app.get('/answer')
def get_answer():
    return answer
app.mount("/",StaticFiles(directory="static",html=True),name="static")