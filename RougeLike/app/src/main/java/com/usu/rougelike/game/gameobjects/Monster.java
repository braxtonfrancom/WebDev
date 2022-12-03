package com.usu.rougelike.game.gameobjects;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;

import com.usu.rougelike.game.gameengine.Game;
import com.usu.rougelike.game.gameengine.GameObject;
import com.usu.rougelike.game.gameengine.Location;

import java.util.ArrayList;
import java.util.Collections;

public class Monster extends GameObject {
    int turnNumber = 0;
    public Monster(Game game) {
        super(game);
        getState().set("alive", true);
        turnNumber = (int)(Math.random() * 4);
    }

    @Override
    public void update(long elapsedTime) {
        boolean isAlive = getState().get("alive");
        String turn = game.getGameState().get("turn");
        if (turn != "monster") return;
        game.getGameState().set("endTurn", true);
        if (!isAlive) return;
        turnNumber ++;
        if (turnNumber % 4 == 0) {
            return;
        }
        GameObject[][] map = game.getGameState().get("map");
        if (checkForPlayer() < 5) {
            GameObject player = game.getGameObjectWithTag("player");
            Location playerLocation = player.getState().get("coords");
            Location myLocation = getState().get("coords");
            if (myLocation.x != playerLocation.x && myLocation.y != playerLocation.y) {
                if (myLocation.y < playerLocation.y) {
                    GameObject other = map[(int)myLocation.y + 1][(int)myLocation.x];
                    if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.y = myLocation.y + 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                if (myLocation.y > playerLocation.y) {
                    GameObject other = map[(int)myLocation.y - 1][(int)myLocation.x];
                    if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.y = myLocation.y - 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                if (myLocation.x < playerLocation.x) {
                    GameObject other = map[(int)myLocation.y][(int)myLocation.x + 1];
                    if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x + 1] = null;
                        myLocation.x = myLocation.x + 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                if (myLocation.x > playerLocation.x) {
                    GameObject other = map[(int)myLocation.y][(int)myLocation.x - 1];
                    if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.x = myLocation.x - 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                moveRandom();

            } else if (myLocation.x == playerLocation.x) { // same column
                if (myLocation.y < playerLocation.y) {
                    GameObject other = map[(int)myLocation.y + 1][(int)myLocation.x];
                    if (other instanceof Player) {
                        // end the game
                        other.getState().set("alive", false);
                        game.getGameState().set("playing", false);
                        return;
                    } else if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.y = myLocation.y + 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                if (myLocation.y > playerLocation.y) {
                    GameObject other = map[(int)myLocation.y - 1][(int)myLocation.x];
                    if (other instanceof Player) {
                        // end the game
                        other.getState().set("alive", false);
                        game.getGameState().set("playing", false);
                        return;
                    } else if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.y = myLocation.y - 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                moveRandom();
            } else if (myLocation.y == playerLocation.y) { // same row
                if (myLocation.x < playerLocation.x) {
                    GameObject other = map[(int)myLocation.y][(int)myLocation.x + 1];
                    if (other instanceof Player) {
                        // end the game
                        other.getState().set("alive", false);
                        game.getGameState().set("playing", false);
                        return;
                    } else if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.x = myLocation.x + 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                if (myLocation.x > playerLocation.x) {
                    GameObject other = map[(int)myLocation.y][(int)myLocation.x - 1];
                    if (other instanceof Player) {
                        // end the game
                        other.getState().set("alive", false);
                        game.getGameState().set("playing", false);
                        return;
                    } else if (other == null) {
                        map[(int)myLocation.y][(int)myLocation.x] = null;
                        myLocation.x = myLocation.x - 1;
                        map[(int)myLocation.y][(int)myLocation.x] = this;
                        return;
                    }
                }
                moveRandom();
            }

        } else {
            moveRandom();
        }
    }

    private void moveRandom() {
        ArrayList<Integer> neighbors = new ArrayList();
        neighbors.add(1);
        neighbors.add(2);
        neighbors.add(3);
        neighbors.add(4);
        Collections.shuffle(neighbors);
        GameObject[][] map = game.getGameState().get("map");
        Location myLocation = getState().get("coords");
        while(!neighbors.isEmpty()) {
            int val = neighbors.remove(0);
            if(val == 1) {
                if (myLocation.y > 0 && map[(int)myLocation.y - 1][(int)myLocation.x] == null) {
                    map[(int)myLocation.y - 1][(int)myLocation.x] = this;
                    map[(int)myLocation.y][(int)myLocation.x] = null;
                    myLocation.y = myLocation.y - 1;
                    return;
                }
            }
            if (val == 2) {
                if (myLocation.x < map[0].length - 1 && map[(int)myLocation.y][(int)myLocation.x + 1] == null) {
                    map[(int)myLocation.y ][(int)myLocation.x + 1] = this;
                    map[(int)myLocation.y][(int)myLocation.x] = null;
                    myLocation.x = myLocation.x + 1;
                    return;
                }
            }
            if(val == 3) {
                if (myLocation.y < map.length - 1 && map[(int)myLocation.y + 1][(int)myLocation.x] == null) {
                    map[(int)myLocation.y + 1][(int)myLocation.x] = this;
                    map[(int)myLocation.y][(int)myLocation.x] = null;
                    myLocation.y = myLocation.y + 1;
                    return;
                }
            }
            if (val == 4) {
                if (myLocation.x > 0 && map[(int)myLocation.y][(int)myLocation.x - 1] == null) {
                    map[(int)myLocation.y ][(int)myLocation.x - 1] = this;
                    map[(int)myLocation.y][(int)myLocation.x] = null;
                    myLocation.x = myLocation.x - 1;
                    return;
                }
            }
        }
    }



    private double checkForPlayer() {
        GameObject player = game.getGameObjectWithTag("player");
        Location playerLocation = player.getState().get("coords");
        Location myLocation = getState().get("coords");
        double distance = Math.sqrt(Math.pow(playerLocation.x - myLocation.x, 2) + Math.pow(playerLocation.y - myLocation.y, 2));
        return distance;
    }

    @Override
    public void render(Canvas canvas, Paint paint) {
        // things you can do in this render method for reference.
        // Location coords = getState().get("coords"); // gets the objects row and column in the grid
        // int cellSize = game.getGameState().get("cellSize"); // gets the size of each cell from the game
        // int myX = (int)coords.x * cellSize; // gets the screen space x position
        // int myY = (int)coords.y * cellSize; // gets the screen space y position
        // boolean isAlive = getState().get("alive"); // get whether or not the monster is alive
        Location coords = getState().get("coords");
        int cellSize = game.getGameState().get("cellSize");
        int myX = (int)coords.x * cellSize;
        int myY = (int)coords.y * cellSize;

        canvas.translate(myX, myY);
        boolean isAlive = getState().get("alive");
        if (isAlive) {
            paint.setColor(Color.RED);
            canvas.drawCircle(cellSize / 2, cellSize / 2, 50, paint);

            paint.setColor(Color.BLACK);
            canvas.drawRoundRect(cellSize / 2 - 30, cellSize / 2 + 5, cellSize / 2 - 10, cellSize / 2 - 10, cellSize / 2, cellSize / 2, paint);
            canvas.drawRoundRect(cellSize / 2 + 30, cellSize / 2 + 5, cellSize / 2 + 10, cellSize / 2 - 10, cellSize / 2, cellSize / 2, paint);
            canvas.drawCircle(cellSize / 2, cellSize / 2 + 26, 6, paint);

        } else {
            paint.setColor(Color.LTGRAY);
            canvas.drawCircle(cellSize / 2, cellSize / 2, 50, paint);
            paint.setColor(Color.BLACK);
            canvas.drawRoundRect(cellSize / 2 - 20, cellSize / 2 + 10, cellSize / 2 - 10, cellSize / 2 - 20, cellSize / 2, cellSize / 2, paint);
            canvas.drawRoundRect(cellSize / 2 + 20, cellSize / 2 + 10, cellSize / 2 + 10, cellSize / 2 - 20, cellSize / 2, cellSize / 2, paint);
            canvas.drawCircle(cellSize / 2, cellSize / 2 + 26, 12, paint);
        }
    }
}
