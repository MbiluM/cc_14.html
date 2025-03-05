function addSupportTicket(customerName, issueDescription, priorityLevel) {
    
    const ticket = document.createElement('div'); // main ticket container <div>
    ticket.setAttribute('class', 'ticket');
    
    const customerHeading = document.createElement('h3'); // heading for the customer’s name
    customerHeading.textContent = `Customer: ${customerName}`;
    
    const issueParagraph = document.createElement('p'); // paragraph for the issue description
    issueParagraph.textContent = `Issue: ${issueDescription}`;
    
    const priorityLabel = document.createElement('span');  // label for the priority level
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    
    const resolveButton = document.createElement('button'); //"Resolve" button
    resolveButton.textContent = 'Resolve';
    
    resolveButton.addEventListener('click', function() { // Event listener to remove the ticket when clicked
        ticket.remove();
    });
    
    ticket.appendChild(customerHeading); // Append all elements <div>
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    
    const ticketContainer = document.getElementById('ticketContainer'); //Append the ticket to the ticket container
    ticketContainer.appendChild(ticket);
}
function highlightHighPriorityTickets() { // Function to highlight all high-priority tickets
    const highPriorityTickets = document.querySelectorAll('[data-priority="high"]'); // Select high priority tickets
    const highPriorityTicketsArray = Array.from(highPriorityTickets); // Convert NodeList to an array 

    highPriorityTicketsArray.forEach(ticket => { //Appearance of each high-priority ticket
        ticket.style.backgroundColor = '#ffcccc'; // Light red background
        ticket.style.border = '2px solid red';  // Red border
        ticket.style.padding = '10px';  // Padding for better visibility
    });
};

// Test info
addSupportTicket('John Doe', 'Unable to access account', 'High');
addSupportTicket('Jane Smith', 'Payment not processing', 'Medium');
addSupportTicket('Alice Johnson', 'Website loading slow', 'Low');
addSupportTicket('Bob Brown', 'Account locked', 'High');

// Highlight all high-priority tickets
highlightHighPriorityTickets();