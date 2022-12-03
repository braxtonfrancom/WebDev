package com.usu.rougelike.game.gameobjects;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.icu.number.Scale;

import com.usu.rougelike.game.gameengine.Game;
import com.usu.rougelike.game.gameengine.GameObject;
import com.usu.rougelike.game.gameengine.Location;

public class Barrier extends GameObject {
    public Barrier(Game game) {
        super(game);
    }

    @Override
    public void render(Canvas canvas, Paint paint) {
        // things you can do in this render method for reference.
        // Location coords = getState().get("coords"); // gets the objects row and column in the grid
        // int cellSize = game.getGameState().get("cellSize"); // gets the size of each cell from the game
        // int myX = (int)coords.x * cellSize; // gets the screen space x position
        // int myY = (int)coords.y * cellSize; // gets the screen space y position

        Location coords = getState().get("coords");
        int cellSize = game.getGameState().get("cellSize");
        int myX = (int)coords.x * cellSize;
        int myY = (int)coords.y * cellSize;

        canvas.save();
        canvas.translate(myX, myY);
        paint.setColor(Color.GRAY);

        canvas.drawRect(0, 0, cellSize, cellSize, paint);

        paint.setColor(Color.WHITE);
        canvas.drawCircle(67, 24, 4, paint);
        canvas.drawCircle(24, 15, 6, paint);
        canvas.drawCircle(131, 134, 3, paint);

        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(2);
        paint.setColor(Color.WHITE);
        canvas.drawRect(0, 0, cellSize, cellSize, paint);

        paint.setStyle(Paint.Style.FILL);
        paint.setColor(Color.DKGRAY);
        canvas.drawCircle(83, 45, 20, paint);
        paint.setColor(Color.BLACK);
        canvas.drawCircle(55, 100, 45, paint);
        canvas.drawCircle(100, 102, 38, paint);
        canvas.drawCircle(51, 62, 24, paint);
        canvas.drawCircle(100, 62, 20, paint);
    }
}
