import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const RewardTable = ({ transactions }) => {
  const [tableData, setTableData] = useState({})
  
  useEffect(() => {
    const users = {}
    transactions.forEach((item) => {
      const reward = pointCalculator(item.amount)
      const userId = item.customer.id
      if (!(userId in users)) {
        users[userId] = {
          customer: item.customer,
          points: {
            "Jan": 0,
            "Feb": 0,
            "Mar": 0
          }
        }
      }
      users[userId].points[item.date] += reward
    })
    setTableData(users)
    return () => {
      
    }
  }, [])

  const pointCalculator = (amount) => {
    if (amount > 100) return  (amount - 100) * 2 + 50
    if (amount > 50) return (amount - 50)
    return 0
  }

  return (
    <Table striped bordered hover variant="dark" className="m-5">
      <thead>
        <tr>
          <th>Customer Id</th>
          <th>Customer Name</th>
          <th>Jan Rewards</th>
          <th>Feb Rewards</th>
          <th>Mar Rewards</th>
          <th>Total Rewards</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(tableData).map((userId) => {
            const { customer, points} = tableData[userId]
            return (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                {Object.keys(points).map((date) => <td>{points[date]}</td>)}
                <td>
                {Object.keys(points).reduce((accumulator, currentValue) => accumulator + points[currentValue], 0)}
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
} 

export default RewardTable