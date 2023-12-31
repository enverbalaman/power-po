import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import DuzenlemeIslemleri from './DuzenlemeIslemleri';

const Datatable = ({ setTablo }) => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [duzenlemeIslemleri, setDuzenlemeIslemleri] = useState(false);

    const data = [
        {
            "id": 1,
            "durum": "AKTİF",
            "sinif": 8,
            "ders": "Matematik",
            "konu": "Üslü Sayılar",
            "icerikTip": 'Konu Anlatımı',
            "kazanim": "MEB 7.2.3",
            "dil": 'Türkçe',
            "ogretmenKilavuz": "Özel Yayın",
            "url": 'www.google.com.tr',
            "zorluk": 'Orta',
            "sure": '0-40',
            "okul": 'Nesibe Aydın',

        },
        {
            "id": 2,
            "durum": "AKTİF",
            "sinif": 7,
            "ders": "Türkçe",
            "konu": "Anlam Bilgisi",
            "icerikTip": 'Konu Anlatımı',
            "kazanim": "MEB 7.2.9",
            "dil": 'Türkçe',
            "ogretmenKilavuz": "Özel Yayın",
            "url": 'www.google.com.tr',
            "zorluk": 'Zor',
            "sure": '0-80',
            "okul": 'Nesibe Aydın',

        },

    ]
    const header = (
        <div className="table-header flex col-12">
            <h5 className="mx-0 my-1 col-2">İÇERİKLER</h5>
            <div className='col-9 justify-content-end flex'>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
                </span>
                <Button className='p-button-secondary ml-4' label="Düzenleme İşlemlerine Git" onClick={() => setDuzenlemeIslemleri(true)}></Button>

            </div>

        </div>
    );
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editIcerik(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => deleteIcerik(rowData)} />
            </React.Fragment>
        );
    }
    const editIcerik = () => {

    }

    const deleteIcerik = () => {

    }
    return (
        <>
            {
                !duzenlemeIslemleri ? (
                    <>
                        <div className="datatable-crud-demo">

                            <div className="card">

                                <DataTable value={data}
                                    selection={selectedProducts}
                                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                                    dataKey="id"
                                    paginator
                                    rows={10}
                                    rowsPerPageOptions={[5, 10, 25]}
                                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                                    globalFilter={globalFilter}
                                    header={header}
                                    responsiveLayout="scroll">
                                    {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column> */}
                                    <Column field="durum" header="Durum" ></Column>
                                    <Column field="sinif" header="Sınıf" ></Column>
                                    <Column field="ders" header="Ders" ></Column>
                                    <Column field="konu" header="Konu" style={{ minWidth: '8rem' }}></Column>
                                    <Column field="icerikTip" header="İçerik Tipi" style={{ minWidth: '10rem' }}></Column>
                                    <Column field="kazanim" header="Kazanım" ></Column>
                                    <Column field="dil" header="Dil" ></Column>
                                    <Column field="ogretmenKilavuz" header="Öğretmen Kılavuzu" s></Column>
                                    <Column field="url" header="URL" style={{ minWidth: '8rem' }}></Column>
                                    <Column field="zorluk" header="Zorluk" ></Column>
                                    <Column field="sure" header="Süre" ></Column>
                                    <Column field="okul" header="Okul" ></Column>

                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </>

                ) : (
                    <>
                    <DuzenlemeIslemleri/>
                    </>
                )
            }


        </>
    );

}
export default Datatable;