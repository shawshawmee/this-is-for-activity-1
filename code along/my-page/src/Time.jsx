function Time() {
    //time
    const current = new Date();
    // By default US English uses 12hr time with AM/PM
    const time = current.toLocaleTimeString("en-US");

    //date
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <div className="card m-3">
            <div className="card-body shadow text-center">
                <h4 className="card-text">{time}</h4>
                <h4 className="card-text">{date}</h4>
            </div>
        </div>
    )
}

export default Time;