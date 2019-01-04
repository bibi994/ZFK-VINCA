import React from 'react';
import './table.css';

const Table = () => {
    return(
        <>
              <div className="small-table">
                <div className="small-table-header">
                    <i className="fas fa-grip-lines"></i>
                    <p>Tabela</p>
                    <div className="more-table"><a href="!#">CELA TABELA</a></div>
                </div>

                <table className="home-table">
                    <tr>
                        <th></th>
                        <th>Ime kluba</th>
                        <th>O.</th>
                        <th>P.</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td><img src={require("./img/zemun.png")} alt="" /> ŽFK ZEMUN</td>
                        <td>5</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td><img src={require("./img/zvezda.png")} alt="" /> ŽFK ZVEZDA B</td>
                        <td>3</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td><img src={require("./img/zvezda.png")} alt="" /> ŽFK CRVENA ZVEZDA</td>
                        <td>4</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td><img src={require("./img/rad.png")} alt="" /> ŽFK RAD</td>
                        <td>5</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td><img src={require("./img/kolubara.png")} alt="" /> ŽFK KOLUBARA</td>
                        <td>4</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td><img src={require("./img/vinca.png")} alt="" /> <span>ŽFK VINČA (Sloga)</span></td>
                        <td><span>4</span></td>
                        <td><span>0</span></td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td><img src={require("./img/bsk.png")} alt="" /> ŽFK B S K 1925</td>
                        <td>3</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default Table;
