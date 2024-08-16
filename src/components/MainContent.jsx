import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainContent = () => {
  // State untuk menyimpan data customer dan halaman saat ini
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const customersPerPage = 10;
  const totalPages = Math.ceil(customers.length / customersPerPage);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={styles.mainContainer}>
      <div style={styles.topAndMiddleSection}>
        {/* Bagian Atas: Menambah, Mencari, Filter, Refresh */}
        <div style={styles.leftSection}>
          <div style={styles.leftTopSection}>
            <div style={styles.textSection}>
              <h2>Customer</h2>
              <p>On this menu you will be able to create, edit, and also delete customers. Also, you can manage it easily.</p>
            </div>
            <div style={styles.buttonSection}>
              <button style={styles.button}>Add</button>
              <input type="text" placeholder="Search..." style={styles.searchInput} />
              <button style={styles.button}>Filter</button>
              <button style={styles.button}>Refresh</button>
              <button style={styles.button}>Print</button>
            </div>
          </div>

          {/* Bagian Tengah: Database Customer */}
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
        </div>

        {/* Bagian Kanan: Top Menu This Week */}
        <div style={styles.rightSection}>
          <div style={styles.analyticsSection}>
            <p style={styles.analyticsText}>See analytics of the customer clearly</p>
            <button style={styles.analyticsButton}>See Analytics</button>
          </div>
          <div style={styles.topMenu}>
            <h3>Top Menu This Week</h3>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              {/* Tambahkan menu lain sesuai kebutuhan */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  topAndMiddleSection: {
    display: 'flex',
    height: '100%', // Mengurangi padding atas dan bawah untuk tinggi layar penuh
  },
  leftSection: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  leftTopSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: '#333',
  },
  rightSection: {
    width: '227px', // Set lebar menjadi 227px
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    margin:'10px',
  },
  analyticsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  },
  analyticsText: {
    margin: '0 0 10px',
    fontSize: '16px',
    color: '#555',
  },
  analyticsButton: {
    padding: '8px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonSection: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  searchInput: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    flexGrow: 1,
  },
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
  topMenu: {
    marginTop: '20px',
  },
};

export default MainContent;
