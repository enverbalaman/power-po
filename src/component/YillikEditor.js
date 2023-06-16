import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { TreeSelect } from 'primereact/treeselect';
import { Button } from 'primereact/button';

const YillikEditor = () => {

    const [selectedKonu, setSelectedKonu] = useState(null);
    const [ders, setDers] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const haftaSayisi = [
        { name: '1. Hafta', code: 1 },
        { name: '2. Hafta', code: 2 },
        { name: '3. Hafta', code: 3 },
        { name: '4. Hafta', code: 4 },
        { name: '5. Hafta', code: 5 },
        { name: '6. Hafta', code: 6 },
        { name: '7. Hafta', code: 7 },
        { name: '8. Hafta', code: 8 },
        { name: '9. Hafta', code: 9 },
        { name: '10. Hafta', code: 10 }
    ];


    const ogrenmeAlanlari = [
        { name: 'Konu Anlatımı', code: 1 },
        { name: 'Test', code: 2 },
        { name: 'Ödev', code: 3 },
        { name: 'Etkinlik', code: 4 },
        { name: 'Zorluk', code: 5 },
        { name: 'Süre', code: 6 }
    ];
    const dersler = [
        { name: 'Matematik', code: 1 },
        { name: 'Türkçe', code: 2 }
    ]
    const matematikKonulari = [
        {
            key: '0',
            label: 'Cebir',
            data: 'Cebir Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '0-0', label: 'Denklem Çözme', icon: 'pi pi-fw pi-file', data: 'Denklem Çözme Konusu' },
                { key: '0-1', label: 'Faktörler', icon: 'pi pi-fw pi-file', data: 'Faktörler Konusu' },
                { key: '0-2', label: 'Eşitsizlikler', icon: 'pi pi-fw pi-file', data: 'Eşitsizlikler Konusu' }
            ]
        },
        {
            key: '1',
            label: 'Geometri',
            data: 'Geometri Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '1-0', label: 'Üçgenler', icon: 'pi pi-fw pi-file', data: 'Üçgenler Konusu' },
                { key: '1-1', label: 'Dikdörtgenler', icon: 'pi pi-fw pi-file', data: 'Dikdörtgenler Konusu' },
                { key: '1-2', label: 'Çemberler', icon: 'pi pi-fw pi-file', data: 'Çemberler Konusu' }
            ]
        },
        {
            key: '2',
            label: 'Trigonometri',
            data: 'Trigonometri Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '2-0', label: 'Sinüs', icon: 'pi pi-fw pi-file', data: 'Sinüs Konusu' },
                { key: '2-1', label: 'Kosinüs', icon: 'pi pi-fw pi-file', data: 'Kosinüs Konusu' },
                { key: '2-2', label: 'Tanjant', icon: 'pi pi-fw pi-file', data: 'Tanjant Konusu' }
            ]
        },
        {
            key: '3',
            label: 'İstatistik',
            data: 'İstatistik Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '3-0', label: 'Ortalama', icon: 'pi pi-fw pi-file', data: 'Ortalama Konusu' },
                { key: '3-1', label: 'Standart Sapma', icon: 'pi pi-fw pi-file', data: 'Standart Sapma Konusu' },
                { key: '3-2', label: 'Frekans Dağılımı', icon: 'pi pi-fw pi-file', data: 'Frekans Dağılımı Konusu' }
            ]
        }
    ];
    const turkceKonulari = [
        {
            key: '0',
            label: 'Dil Bilgisi',
            data: 'Dil Bilgisi Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '0-0', label: 'İsimler', icon: 'pi pi-fw pi-file', data: 'İsimler Konusu' },
                { key: '0-1', label: 'Fiiller', icon: 'pi pi-fw pi-file', data: 'Fiiller Konusu' },
                { key: '0-2', label: 'Sıfatlar', icon: 'pi pi-fw pi-file', data: 'Sıfatlar Konusu' }
            ]
        },
        {
            key: '1',
            label: 'Anlatım',
            data: 'Anlatım Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '1-0', label: 'Paragraf Yazma', icon: 'pi pi-fw pi-file', data: 'Paragraf Yazma Konusu' },
                { key: '1-1', label: 'Kompozisyon Yazma', icon: 'pi pi-fw pi-file', data: 'Kompozisyon Yazma Konusu' },
                { key: '1-2', label: 'Mektup Yazma', icon: 'pi pi-fw pi-file', data: 'Mektup Yazma Konusu' }
            ]
        },
        {
            key: '2',
            label: 'Edebiyat',
            data: 'Edebiyat Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '2-0', label: 'Halk Edebiyatı', icon: 'pi pi-fw pi-file', data: 'Halk Edebiyatı Konusu' },
                { key: '2-1', label: 'Divan Edebiyatı', icon: 'pi pi-fw pi-file', data: 'Divan Edebiyatı Konusu' },
                { key: '2-2', label: 'Tanzimat Edebiyatı', icon: 'pi pi-fw pi-file', data: 'Tanzimat Edebiyatı Konusu' }
            ]
        },
        {
            key: '3',
            label: 'Yazım Kuralları',
            data: 'Yazım Kuralları Konuları',
            icon: 'pi pi-fw pi-folder',
            children: [
                { key: '3-0', label: 'Noktalama İşaretleri', icon: 'pi pi-fw pi-file', data: 'Noktalama İşaretleri Konusu' },
                { key: '3-1', label: 'Büyük Küçük Harf', icon: 'pi pi-fw pi-file', data: 'Büyük Küçük Harf Konusu' },
                { key: '3-2', label: 'Yazım Yanlışları', icon: 'pi pi-fw pi-file', data: 'Yazım Yanlışları Konusu' }
            ]
        }
    ];

    console.log("ders", ders);
    return (
        <>
            <div className="input-row">
                <h3 className="mt-2 ml-4">Matematik Yıllık Planı</h3>
            </div>

            <div className="container">

                <div className="left-column">
                    {haftaSayisi.map((item, index) => (
                        <div className="input-row" key={index}>
                            <InputText
                                disabled
                                placeholder={item.name}
                                className="color bordered-input"
                                />
                        </div>
                    ))}
                </div>
                <div className="right-column">
                    <MultiSelect style={{ minWidth: "600px" }} value={selectedKonu} onChange={(e) => setSelectedKonu(e.value)} options={ogrenmeAlanlari} optionLabel="name" display="chip"
                        placeholder="Öğrenme Alanı Seçiniz" maxSelectedLabels={3} className="w-full md:w-20rem " />

                    <Dropdown style={{ minWidth: "600px" }} value={ders} onChange={(e) => setDers(e.value)} options={dersler} optionLabel="name"
                        placeholder="Ders Seçimi Yapınız" className="w-full md:w-20rem mt-4 mb-4" />

                    <TreeSelect style={{ minWidth: "600px" }} value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={ders?.code === 2 ? turkceKonulari : matematikKonulari}
                        metaKeySelection={false} className="md:w-20rem w-full " selectionMode="multiple" placeholder="Konu Seçiniz"></TreeSelect>

                    {/* <Dropdown className='mt-4 mb-4' style={{ width: "450px" }} options={weeks} placeholder="Hafta seçin" />

                    <Dropdown style={{ width: "450px" }} options={weeks} placeholder="Hafta seçin" /> */}

                </div>
            </div>
            <div className="input-row flex justify-content-center">
                <Button className="mr-4" severity="success" label='Kaydet' />
                <Button severity="danger" label='Vazgeç' />
            </div>
        </>
    );
};
export default YillikEditor;