import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import YillikEditor from './YillikEditor';

const YillikPlanlar = () => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [yillikPlanlar, setYillikPlanlar] = useState(false);
    const [yillikEditor, setYillikEditor] = useState(false);
    const [planlar, setPlanlar] = useState([
        {
            "id": 1,
            "ad": "3.Sınıf Matematik Y.P.",
            "sinif": '3',
            "kayitZaman": "16.06.2023 13:30",
            "haftaSayisi": '29',
            "ders": "Matematik",
            "okul": 'Serçe Akademi'

        },
        {
            "id": 2,
            "ad": "5.Sınıf Edebiyat Y.P.",
            "sinif": '5',
            "kayitZaman": "02.06.2023 11:30",
            "haftaSayisi": '22',
            "ders": "Türk Dili ve Edebiyatı",
            "okul": 'Serçe Akademi'

        }, {
            "id": 3,
            "ad": "9.Sınıf Tarih Y.P.",
            "sinif": '9',
            "kayitZaman": "01.06.2023 10:30",
            "haftaSayisi": '24',
            "ders": "Tarih",
            "okul": 'Serçe Akademi'

        }, {
            "id": 4,
            "ad": "8.Sınıf Kimya Y.P.",
            "sinif": '8',
            "kayitZaman": "28.05.2023 14:00",
            "haftaSayisi": '30',
            "ders": "Kimya",
            "okul": 'Serçe Akademi'

        },

    ]);


    const header = (
        <div className="table-header flex col-12">
            <div className="flex align-items-center justify-content-end gap-2">
                <Button
                    icon="pi pi-plus"
                    onClick={() => {
                        const newData = [
                            ...planlar,
                            {
                                ad: '6.Sınıf Beden Eğitimi Y.P.',
                                sinif: '6',
                                kayitZaman: '24.05.2023 10:45',
                                haftaSayisi: '12',
                                ders: 'Beden Eğitimi',
                                okul: 'Serçe Akademi',
                            },
                        ];
                        setPlanlar(newData);
                    }}
                />            <Button type="button" icon="pi pi-file-excel" severity="success" rounded data-pr-tooltip="XLS" />
            </div>
            <h3 className="mx-0 my-1 col-2">Yıllık Planlar</h3>
            <Button label='Yıllık Plan Editörüne Git' iconPos='right' icon="pi pi-angle-double-right" severity="success" onClick={() => setYillikEditor(true)} />


        </div>
    );
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="button-group">
                    <Button
                        icon="pi pi-search"
                        className="p-button-rounded p-button-error"
                        onClick={() => editIcerik(rowData)}
                    />
                    <Button
                        icon="pi pi-copy"
                        className="p-button-rounded p-button-secondary mr-2 ml-2"
                        onClick={() => editIcerik(rowData)}
                    />
                    <Button
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-info "

                    />
                    <Button
                        icon="pi pi-pencil"
                        className="p-button-rounded p-button-success mr-2 ml-2"
                        onClick={() => editIcerik(rowData)}
                    />
                    <Button
                        icon="pi pi-trash"
                        className="p-button-rounded p-button-warning"
                        onClick={() => deleteIcerik(rowData)}
                    />
                </div>
            </React.Fragment>
        );
    }
    const editIcerik = () => {

    }

    const deleteIcerik = () => {

    }
    const kayitZamanTemplate = () => {
        return (
            <>
            </>
        )
    }
    return (
        <>
            {
                !yillikEditor ? (
                    <>
                        <div className="datatable-crud-demo">

                            <div className="card">

                                <DataTable value={planlar}
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
                                    <Column field="ad" header="Ad" ></Column>
                                    <Column field="sinif" header="Sınıf" ></Column>
                                    <Column field="kayitZaman" header="Kayıt Zaman" ></Column>
                                    <Column field="haftaSayisi" header="Hafta Sayısı" style={{ minWidth: '8rem' }}></Column>
                                    <Column field="ders" header="Ders" style={{ minWidth: '10rem' }}></Column>
                                    <Column field="okul" header="Okul" style={{ minWidth: '10rem' }}></Column>
                                    {/* <Column body={kayitZamanTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column> */}

                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                </DataTable>
                            </div>



                        </div>
                    </>

                ) : (
                    <>
                        <YillikEditor />
                    </>
                )
            }


        </>
    );

}
export default YillikPlanlar;