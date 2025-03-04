import turtle
import time
import random
from movement import *


delay = 0.1

score = 0
high_score = 0

# Creating a window screen
wn = turtle.Screen()
wn.title("Snake Game")
wn.bgcolor("black")
wn.setup(width=600, height=600)

wn.tracer(0)  # set delay fro update drawings
wn._root = wn.getcanvas().winfo_toplevel()
wn._root.resizable(False, False)

# food in the game
food = turtle.Turtle()
colors = random.choice(["red", "green", "black"])
shapes = random.choice(["square", "triangle", "circle"])
food.speed(0)
food.shape(shapes)
food.color(colors)
food.penup()  # don't draw line when moving
food.goto(0, 100)

pen = turtle.Turtle()
pen.speed(0)
pen.shape("square")
pen.color("white")
pen.penup()
pen.hideturtle()  # don't draw line when moving
pen.goto(0, 250)
pen.write("Score: 0  High Score: 0", align="center", font=("Courier", 24, "bold"))



# keyboard bindings
wn.listen()  # listen to keyboard input
wn.onkeypress(go_up, "w")  # when key 'w' is pressed call function go_up
wn.onkeypress(go_down, "s")
wn.onkeypress(go_left, "a")
wn.onkeypress(go_right, "d")

# Adding arrow keys for movement
wn.onkeypress(go_up, "Up")  # when arrow 'Up' is pressed call function go_up
wn.onkeypress(go_down, "Down")  # when arrow 'Down' is pressed call function go_down
wn.onkeypress(go_left, "Left")  # when arrow 'Left' is pressed call function go_left
wn.onkeypress(go_right, "Right")  # when arrow 'Right' is pressed call function go_right


segments = []


# Main game loop
while True:
    wn.update()

    # check for a collision with the border
    if (
        head.xcor() > 290
        or head.xcor() < -290
        or head.ycor() > 290
        or head.ycor() < -290
    ):
        time.sleep(1)  # wait 1 second
        head.goto(0, 0)  # return head to center
        head.direction = "Stop"  # stop moving
        colors = random.choice(["red", "blue", "green"])
        shapes = random.choice(["square", "circle"])
        food.shape(shapes)
        food.color(colors)

        # hide the segments
        for segment in segments:
            segment.goto(1000, 1000)

        # clear the segments list
        segments.clear()

        # reset the score
        score = 0

        # reset the delay
        delay = 0.1

        pen.clear()
        pen.write(
            "Score: {}  High Score: {}".format(score, high_score),
            align="center",
            font=("Courier", 24, "bold"),
        )

    # check for a collision with the food
    if head.distance(food) < 20:
        # move the food to a random spot
        x = random.randint(-270, 270)
        y = random.randint(-270, 270)
        food.goto(x, y)

        # add a segment
        new_segment = turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")  # tail color
        new_segment.speed(0)
        new_segment.penup()
        segments.append(new_segment)
        delay -= 0.001  # speed up the game to increase game difficulty
        score += 10  # increase the score

        if score > high_score:
            high_score = score
        pen.clear()
        pen.write(
            "Score: {}  High Score: {}".format(score, high_score),
            align="center",
            font=("Courier", 24, "bold"),
        )

    # Shifting all snake body segments then move the head
    for index in range(len(segments) - 1, 0, -1):
        x = segments[index - 1].xcor()  # x coordinate of previous segment
        y = segments[index - 1].ycor()  # y coordinate of previous segment
        segments[index].goto(x, y)

    if len(segments) > 0:  # if there are segments in the list
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x, y)
    move()

    # check for head collision with the body segments
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0, 0)
            head.direction = "stop"
            colors = random.choice(["red", "blue", "green"])
            shapes = random.choice(["square", "circle"])
            food.shape(shapes)
            food.color(colors)

            # hide the segments
            for segment in segments:
                segment.goto(1000, 1000)

            # clear the segments list
            segments.clear()

            # reset the score
            score = 0

            # reset the delay
            delay = 0.1

            # update the score display
            pen.clear()
            pen.write(
                "Score: {}  High Score: {}".format(score, high_score),
                align="center",
            )

    time.sleep(delay)