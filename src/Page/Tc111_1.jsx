import React, { useState } from 'react'
import { connect } from 'react-redux'

function Tc111_1(props) {
  const data1111 = props.opendatas.data1111
  const readstate = props.opendatas.readstate

  if (!readstate) {
    return (
      <div className="card shadow">
        <div className="card-header border-0">
          <h3 className="mb-0">資料讀取失敗，稍後請重新登陸！</h3>
        </div>
        <div className="table-responsive">
        </div>

      </div>
    )
  }
  else {
    return (
      <div className="card shadow">
        <div className="card-header border-0">
          <h3 className="mb-0">111年1月</h3>
        </div>
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th>編號</th>
                <th>路口名稱</th>
                <th>主要肇因</th>
                <th>轄區分局</th>
                <th>發生時段</th>
                <th>A1</th>
                <th>A2件數</th>
                <th>A2受傷</th>
                <th>A3</th>
              </tr>
            </thead>
            {data1111.map((data) => {
              return <tbody key={data.編號 * 1}>
                <tr>
                  <td>{data.編號 * 1}</td>
                  <td>{data.路口名稱}</td>
                  <td>{data.主要肇因}</td>
                  <td>{data.轄區分局}</td>
                  <td>{data.發生時間}</td>
                  <td>{data.A1}</td>
                  <td>{data.A2件數}</td>
                  <td>{data.A2受傷}</td>
                  <td>{data.A3}</td>
                </tr>

              </tbody>
            })}
          </table>
        </div>

      </div>
    )
  }
}

export default connect(
  state => ({
    opendatas: state.getdata
  }), {
}
)(Tc111_1)

