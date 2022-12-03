package com.braxtonfrancom;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.AppCompatEditText;
import androidx.appcompat.widget.AppCompatTextView;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        final LinearLayout layout = new LinearLayout(this);
        final LinearLayout newPage = new LinearLayout(this);
        //Text view
        AppCompatTextView name = new AppCompatTextView(this);
        name.setText("Enter a name:");

        AppCompatTextView adjective = new AppCompatTextView(this);
        adjective.setText("Enter an adjective:");

        AppCompatTextView verb = new AppCompatTextView(this);
        verb.setText("Enter a verb:");

        AppCompatTextView food = new AppCompatTextView(this);
        food.setText("Enter a food:");

        AppCompatTextView place = new AppCompatTextView(this);
        place.setText("Enter a place:");

        //Edit text
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        );

        final AppCompatEditText nameField = new AppCompatEditText(this);
        nameField.setLayoutParams(params);
        final AppCompatEditText adjectiveField = new AppCompatEditText(this);
        adjectiveField.setLayoutParams(params);
        final AppCompatEditText verbField = new AppCompatEditText(this);
        verbField.setLayoutParams(params);
        final AppCompatEditText foodField = new AppCompatEditText(this);
        foodField.setLayoutParams(params);
        final AppCompatEditText placeField = new AppCompatEditText(this);
        placeField.setLayoutParams(params);

        // Message view
        final AppCompatTextView messageView = new AppCompatTextView(MainActivity.this);

        //Button
        AppCompatButton button = new AppCompatButton(this);
        button.setText("Get my story!");
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String name = nameField.getText().toString();
                String adjective = adjectiveField.getText().toString();
                String verb = verbField.getText().toString();
                String food = foodField.getText().toString();
                String place = placeField.getText().toString();
                messageView.setText("One day, " + name + " was walking around " +
                        "the " + place + ". After some time, a " + adjective + " noise was heard from " +
                        name + "'s stomach. " + name + " had the clever idea to " + verb + " into the nearby " + food + " shop" +
                        " to get some " + adjective + " " + food + "'s. The end." );
                messageView.setTextSize(20);
                messageView.setTextColor(Color.BLACK);
                newPage.addView(messageView);    //Gets it to go onto the other page
                setContentView(newPage);         //by changing the set layout and adding the messageView to it.
            }
        });
        layout.addView(name);
        layout.addView(nameField);
        layout.addView(adjective);
        layout.addView(adjectiveField);
        layout.addView(verb);
        layout.addView(verbField);
        layout.addView(food);
        layout.addView(foodField);
        layout.addView(place);
        layout.addView(placeField);

        layout.addView(button);

        layout.setOrientation(LinearLayout.VERTICAL);
        setContentView(layout);
    }
}