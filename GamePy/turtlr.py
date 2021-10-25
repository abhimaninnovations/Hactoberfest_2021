import turtle


def move_snake():
    pen.clearstamps()
    new_head = snake[-1].copy()
    new_head[0] += 20
    snake.append(new_head)
    snake.pop(0)
    for segment in snake:
        pen.goto(segment[0], segment[1])
        pen.stamp()
    screen.update()
    turtle.ontimer(move_snake, 200)


snake = [[0, 0], [20, 0], [40, 0]]
screen = turtle.Screen()
screen.tracer(0)
pen = turtle.Turtle("square")
pen.penup()

for segment in snake:
    pen.goto(segment[0], segment[1])
    pen.stamp()
move_snake()

turtle.done()