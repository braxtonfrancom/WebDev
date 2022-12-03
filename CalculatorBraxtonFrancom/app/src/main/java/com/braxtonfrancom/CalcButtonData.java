package com.braxtonfrancom;

public class CalcButtonData {

    public static enum ButtonType {
        Number,
        Add,
        Subtract,
        Divide,
        Multiply,
        Clear,
        Equals,
        Undo,
        Dump
    }

    final public String text;
    final public int row;
    final public int col;
    final public int colSpan;
    final public ButtonType type;

    public CalcButtonData(String text, int row, int col, int colSpan, ButtonType type) {
        this.text = text;
        this.row = row;
        this.col = col;
        this.colSpan = colSpan;
        this.type = type;
    }


}
