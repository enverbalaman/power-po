import { FileUpload } from 'primereact/fileupload';
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import Datatable from './Datatable';

const Powerpoint = () => {
    const konular = [
        { name: 'Yazım Bilgisi', code: 'YB' },
        { name: 'Cümlede Anlam', code: 'CA' },

    ];
    const icerikTipi = [
        { name: 'Konu Anlatımı', code: 'KA' }
    ];
    const zorluklar = [
        { name: 'Kolay', code: 'K' },
        { name: 'Orta', code: 'O' },

    ];
    const sureler = [
        { name: '0-40', code: 'I' },
        { name: '0-80', code: 'S' }

    ];
    const kazanimlar = [
        { name: 'MEB 7.2.9', code: 'K1' },
        { name: 'MEB 7.1.0', code: 'K2' },

    ];
    const altKazanimlar = [
        { name: 'MEB 7.2.9.2', code: 'AK1' }
    ];
    const altKazanimlar1 = [
        { name: 'MEB 7.1.0.2', code: 'AK2' }
    ];
    const [tablo, setTablo] = useState(false);
    const [konu, setKonu] = useState(null);
    const [konu2, setKonu2] = useState(null);

    const [icerik, setIcerik] = useState(null);
    const [zorluk, setZorluk] = useState(null);
    const [sure, setSure] = useState(null);
    const [kazanim, setKazanim] = useState(null);
    const [kazanim1, setKazanim1] = useState(null);
    const [kazanim2, setKazanim2] = useState(null);

    const toast = useRef(null);

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
    const handleChange = (e) => {
        console.log("e", e);
        switch (e.target.id) {
            case "konu1":
                setKonu(e.value);
                break;
            case "konu2":
                setKonu2(e.value);
                break;
            case "icerik":
                setIcerik(e.value);
                break;
            case "zorluk":
                setZorluk(e.value);
                break;
            case "sure":
                setSure(e.value);
                break;
            case "kazanim":
                setKazanim(e.value);
                break;
            case "kazanim1":
                setKazanim1(e.value);
                break;
            case "kazanim2":
                setKazanim2(e.value);
                break;
            default:
        }
    }
    const buttonOptions = {
        icon: 'pi pi-plus' ,      
        style: {width:'300px',color:'white',backgroundColor:'#173572',border:'1px solid black',borderRadius:'5px',fontWeight:'bold',fontSize:'15px    '}
    }
    return (
        <>
            <Toast position='top' />
            {
                !tablo ? (
                    <>
                        <div style={{ border: '1px solid' }} className='powerCard'>

                            <div className='grid p-col-12 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div  className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Power Point Dosyasını Seçiniz</span>
                                    <FileUpload chooseOptions={buttonOptions} className='col-6 p-0 flex align-items-center justify-content-start mt-2' mode="basic" chooseLabel="Dosya Seç" onUpload={onBasicUpload} />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Konu Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id="konu1" value={konu} options={konular} onChange={handleChange} optionLabel="name" placeholder="Konu Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>JPEG Dosyalarını Seçiniz</span>
                                    <FileUpload chooseOptions={buttonOptions} style={{ minWidth: '300px' }} className='col-6 p-0 flex align-items-center justify-content-start' mode="basic" chooseLabel="Dosya Seç" onUpload={onBasicUpload} />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Konu Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id="konu2" value={konu2} options={konular} onChange={handleChange} optionLabel="name" placeholder="Konu Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>İçerik Tipi Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id='icerik' value={icerik} options={icerikTipi} onChange={handleChange} optionLabel="name" placeholder="İçerik Tipi  Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Zorluk Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id='zorluk' value={zorluk} options={zorluklar} onChange={handleChange} optionLabel="name" placeholder="Zorluk Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1  pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Süre Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id='sure' value={sure} options={sureler} onChange={handleChange} optionLabel="name" placeholder="Süre Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Kazanım Seçiniz</span>
                                    <Dropdown  style={{ minWidth: '300px' }} id='kazanim' value={kazanim} options={kazanimlar} onChange={handleChange} optionLabel="name" placeholder="Kazanım Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Altkazanım  Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id='kazanim1' value={kazanim1} options={altKazanimlar} onChange={handleChange} optionLabel="name" placeholder="Altkazanım Seçiniz" />
                                </div>
                            </div>
                            <hr />
                            <div className='grid p-col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-12 p-0 pl-1 pt-1 flex'>
                                    <span className='col-6 mt-2 flex align-items-center justify-content-start' style={{ marginRight: '10px' }}>Altkazanım Seçiniz</span>
                                    <Dropdown style={{ minWidth: '300px' }} id='kazanim2' value={kazanim2} options={altKazanimlar1} onChange={handleChange} optionLabel="name" placeholder="Taksonomi Seçiniz" />
                                </div>
                            </div>
                        </div>
                        <Button className='p-button-secondary flex justify-content-center ml-2' label="Güncellemeyi Başlat" onClick={()=>setTablo(true)}></Button>

                    </>

                ) : (
                    <>
                        <div style={{ border: '1px solid' }} className='powerCard'>
                           <Datatable  />
                        </div>
                    </>
                )

            }

        </>

    )
}
export default Powerpoint;