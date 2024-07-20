// Example JavaScript for fetching patient info and other features

function fetchPatientInfo() {
    const patientId = document.getElementById('patient-id').value;
    // Simulate fetching patient info
    const patientInfo = {
        id: patientId,
        name: "John Doe",
        age: 20,
        condition: "Healthy"
    };
    displayPatientInfo(patientInfo);
}

function displayPatientInfo(info) {
    const display = document.getElementById('patient-info-display');
    display.innerHTML = `<p>ID: ${info.id}</p>
                         <p>Name: ${info.name}</p>
                         <p>Age: ${info.age}</p>
                         <p>Condition: ${info.condition}</p>`;
}

function orderMedication() {
    const medication = document.getElementById('medication').value;
    const status = document.getElementById('delivery-status');
    // Simulate ordering medication
    status.innerHTML = `Order placed for ${medication}. Delivery status: Pending.`;
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}
