import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Datatable = ({setTablo}) => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(null);
    const [productDialog, setProductDialog] = useState(false);

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
        <div className="table-header">
            <h5 className="mx-0 my-1">İÇERİKLER</h5>
            
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
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

            {/* <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={this.hideDialog}>
                {this.state.product.image && <img src={`images/product/${this.state.product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={this.state.product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
                    {this.state.submitted && !this.state.product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div>
            </Dialog> */}

            {/* <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={this.hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {this.state.product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog> */}
        </div>
    );

}
export default Datatable;