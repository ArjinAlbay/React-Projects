import React from "react";

function UsersTable(props) {
  return (
    <>
      <table>
        <tr>
          <th> id</th>
          <th> name</th>
          <th> username</th>
          <th> email</th>
          <th> remove</th>
        </tr>
        {props.sendUsers &&
          props.sendUsers.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>
                  <button onClick={() => props.removeusers.id}>remove</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default UsersTable;
