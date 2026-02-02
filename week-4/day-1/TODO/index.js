// step 1 :  catch/select the form tag and attch event
document.querySelector("form").addEventListener("submit", getData);

function getData(event) {
    event.preventDefault();

    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;

    let taskObj = {
        taskName, taskPriority
    };

    displayTable(taskObj);
}

function displayTable(obj) {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = obj.taskName;
    td2.innerText = obj.taskPriority;
    td3.innerText = "Add";

    row.append(td1, td2, td3);
    document.querySelector("tbody").appendChild(row);
}