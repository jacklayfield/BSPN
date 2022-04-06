import "../styling/body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";

export function Schedule() {

    return (
        <div>
            <div class="m-5">
                <h1>Schedule</h1>
            </div>
            <body>
            <div id="schedule" class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Time</th>
                            <th class="text-center">Opponent</th>
                            <th class="text-center">Location</th>
                            <th class="text-center">Score</th>





                        </tr>
                    </thead>
                    <tbody></tbody>
            </div>
        </body>

        </div>
            
            
        
    );

}