import React from 'react';

const CustomerList = ({ customers, currentCustomers, handlePreviousPage, handleNextPage, goToPage, currentPage, totalPages }) => {
  return (
    <div style={styles.customerDatabase}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Level</th>
            <th>Favorite Menu</th>
            <th>Total Transaction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.level}</td>
              <td>{customer.favoriteMenu}</td>
              <td>{customer.totalTransaction}</td>
              <td>
                <button style={styles.actionButton}>Detail</button>
                <button style={styles.actionButton}>Edit</button>
                <button style={styles.actionButton}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        <button
          style={styles.paginationButton}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            style={{
              ...styles.paginationButton,
              ...(currentPage === i + 1 ? styles.activePageButton : {})
            }}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          style={styles.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  customerDatabase: {
    flexGrow: 2,
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflowY: 'auto', // Allow scrolling if needed
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '10px',
  },
  actionButton: {
    marginRight: '5px',
    padding: '4px 8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
  },
  paginationButton: {
    padding: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activePageButton: {
    backgroundColor: '#0056b3',
  },
};

export default CustomerList;
