import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import YillikPlanlar from './YillikPlanlar';

const DuzenlemeIslemleri = () => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [yillikPlanlar, setYillikPlanlar] = useState(false);

    const data = [
        {
            "id": 1,
            "durum": "AKTİF",
            "sira": '1,0000',
            "dosyaTuru": "Resim Url",
            "gorunumEklentiTur": 'Üst Çizgi Göster',
            "ad": "Kapak:Hoşgeldin",
            "dosyaUrl": ''

        },
        {
            "id": 2,
            "durum": "AKTİF",
            "sira": '2,0000',
            "dosyaTuru": "Resim Url",
            "gorunumEklentiTur": 'Üst Çizgi Göster',
            "ad": "Özet ve Hedefler",
            "dosyaUrl": ''

        },
        {
            "id": 3,
            "durum": "AKTİF",
            "sira": '3,0000',
            "dosyaTuru": "Resim Url",
            "gorunumEklentiTur": 'Üst Çizgi Göster',
            "ad": "Üslü Sayılar Nedir ? ",
            "dosyaUrl": ''

        },

    ]
    const header = (
        <div className="table-header flex col-12">
            <h3 className="mx-0 my-1 col-2">İçerik Sayfalar</h3>
            <div className='col-9 justify-content-end flex'>
                <span className="p-input-icon-left">
                    <Button className='p-button-secondary ml-4' label="Yıllık Planlara Git " onClick={()=> setYillikPlanlar(true)} ></Button>

                </span>

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
                !yillikPlanlar ? (
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
                                    <Column field="sira" header="Sıra" ></Column>
                                    <Column field="dosyaTuru" header="Dosya Türü" ></Column>
                                    <Column field="gorunumEklentiTur" header="Görüntüm Eklenti Tür" style={{ minWidth: '8rem' }}></Column>
                                    <Column field="ad" header="Ad" style={{ minWidth: '10rem' }}></Column>
                                    <Column field="dosyaUrl" header="Dosya Url" style={{ minWidth: '30rem' }}></Column>

                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                                </DataTable>
                            </div>



                        </div>
                    </>

                ) : (
                    <>
                        <YillikPlanlar />
                    </>
                )
            }


        </>
    );

}
export default DuzenlemeIslemleri;