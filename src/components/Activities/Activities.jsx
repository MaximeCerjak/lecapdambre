import React from "react";

const Activities = () => {
    return (
        <section id="activities" style={{ padding: '20px' }}>
            <h2>Activités</h2>
            <div className="activities-list">
                <div className="activity-card">
                    <h3>Activité 1</h3>
                    <p>Description de l'activité 1</p>
                </div>
                <div className="activity-card">
                    <h3>Activité 2</h3>
                    <p>Description de l'activité 2</p>
                </div>
                <div className="activity-card">
                    <h3>Activité 3</h3>
                    <p>Description de l'activité 3</p>
                </div>
            </div>
        </section>
    );
}

export default Activities;