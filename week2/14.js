code ชุดเดิมไม่ได้ทำ tail call optimization เพราะไม่ได้ return ฟังก์ชันออกมาเฉยๆ แต่ไป + กับฟังชั่นอื่นๆด้วย

หากต้องการทำ tail call optimization ต้องเขียน code ดังนี้


...
...
...


ทำไม่เป็นค่ะ T-T