import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';

import './App.css';

// Styles for PDF (using react-pdf styles)
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  cell: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    width: '14%',
    textAlign: 'center',
  },
});

const Check = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    invoiceNumber: '',
    orderNumber: '',
    invoiceDate: '',
    dueDate: '',
    taxPercentage: 0,
    items: [{ description: '', quantity: 0, rate: 0, tax: 0 }],
    totalAmount: 0,
  });

  // Handle form change
  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'items') {
      const updatedItems = [...formData.items];
      updatedItems[index][e.target.dataset.field] = value;
      setFormData({ ...formData, items: updatedItems });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Add new row to items
  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: '', quantity: 0, rate: 0, tax: 0 }],
    });
  };

  // Calculate total amount
  const calculateTotalAmount = () => {
    const total = formData.items.reduce(
      (acc, item) => acc + item.quantity * item.rate * (1 + item.tax / 100),
      0
    );
    setFormData({ ...formData, totalAmount: total });
  };

  // Calculate PDF document
  const InvoicePDF = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.section}>Customer Name: {formData.customerName}</Text>
        <Text style={styles.section}>Invoice Number: {formData.invoiceNumber}</Text>
        <Text style={styles.section}>Order Number: {formData.orderNumber}</Text>
        <Text style={styles.section}>Invoice Date: {formData.invoiceDate}</Text>
        <Text style={styles.section}>Due Date: {formData.dueDate}</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Item</Text>
            <Text style={styles.cell}>Quantity</Text>
            <Text style={styles.cell}>Rate</Text>
            <Text style={styles.cell}>Tax (%)</Text>
            <Text style={styles.cell}>Amount</Text>
          </View>

          {formData.items.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.description}</Text>
              <Text style={styles.cell}>{item.quantity}</Text>
              <Text style={styles.cell}>{item.rate}</Text>
              <Text style={styles.cell}>{item.tax}</Text>
              <Text style={styles.cell}>
                {(item.quantity * item.rate * (1 + item.tax / 100)).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.section}>Total Amount: Rs. {formData.totalAmount.toFixed(2)}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="App">
      <h1>Create Invoice</h1>

      <div className="form-group">
        <label>Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Order Number</label>
        <input
          type="text"
          name="orderNumber"
          value={formData.orderNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Invoice Date</label>
        <input
          type="text"
          name="invoiceDate"
          value={formData.invoiceDate}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Due Date</label>
        <input
          type="text"
          name="dueDate"
          value={formData.dueDate}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="items">
        <h2>Items</h2>
        {formData.items.map((item, index) => (
          <div key={index} className="item">
            <input
              type="text"
              placeholder="Item Description"
              data-field="description"
              value={item.description}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              placeholder="Quantity"
              data-field="quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              placeholder="Rate"
              data-field="rate"
              value={item.rate}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              placeholder="Tax %"
              data-field="tax"
              value={item.tax}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <button onClick={addItem}>Add Item</button>
      </div>

      <div className="total">
        <button onClick={calculateTotalAmount}>Calculate Total</button>
        <h3>Total: Rs. {formData.totalAmount.toFixed(2)}</h3>
      </div>

      <div className="download">
        <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
          {({ loading }) => (loading ? 'Preparing PDF...' : 'Download Invoice as PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Check;
