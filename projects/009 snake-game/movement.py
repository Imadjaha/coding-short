
import turtle

head = turtle.Turtle()
head.direction = "stop"
head.speed(0)
head.shape("square")
head.color("white")
head.penup()  # don't draw line when moving
head.goto(0, 0)  # start from middle of the screen
# assigning key directions
def go_up():
    if head.direction != "down":
        head.direction = "up"


def go_down():
    if head.direction != "up":
        head.direction = "down"


def go_left():
    if head.direction != "right":
        head.direction = "left"


def go_right():
    if head.direction != "left":
        head.direction = "right"


def move():
    if head.direction == "up":
        y = head.ycor()  # y coordinate of head
        head.sety(
            y + 20
        )  # move 20 pixels upwards ( 20 pixels because it is the default shape)
    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)
    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)
    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)