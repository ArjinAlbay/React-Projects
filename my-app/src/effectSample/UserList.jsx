import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch(`https://northwind.vercel.app/api/suppliers`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removeusers = (id) => {
    const requ = {
      method: `DELETE`,
    };

    fetch(`https://northwind.vercel.app/api/suppliers/` + id, requ)
      .then((res) => console.log(res))
      .then((data) => {
        let newUsersList = users.filter((q) => (q.id = !id));
        setUsers(newUsersList);
      });
  };

  return loading === true ? (
    <span> loading...</span>
  ) : (
    <>
      <table>
        <tr>
          <th> id</th>
          <th> name</th>
          <th> username</th>
          <th> email</th>
          <th> remove</th>
        </tr>
        {users &&
          users.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>
                  <button onClick={() => removeusers(item.id)}>remove</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default UserList;


var name1 = ["arjin","hazar","kadir","serhat"];


for (let i = 0; i < name1.length; i++) {
  let news = name1[Math.floor(Math.random() * name1.length)];

console.log(news)

let newList = [];

newList.push(news)

console.log(newList);
  
}

