import { Component, OnInit } from '@angular/core';
import { AkService } from '../ak.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  fcontain:any;
  pname:any;
  bcode:any;
  cdate:any;
  edate:any;
  pricee:any;
  quant:any;

  id={
    _id: '',
    formContain: '',
    productName: '',
    barcode: '',
    createdDate:'',
    expiredDate:'',
    price:'',
    quantity:''
  };

  checkAdd=false;
  checkEdit=false;
  userObj={
    formContain: '',
    productName: '',
    barcode: '',
    createdDate:'',
    expiredDate:'',
    price:'',
    quantity:''
  };
  crud:any;
  constructor(private user:AkService){
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.crud=data;
      console.log(this.crud);
      
    })
  }
  addNewelement(){
    this.checkAdd=true;
  }

  add(){
   console.log(this.fcontain);
   this.userObj.formContain=this.fcontain
   this.userObj.productName=this.pname
   this.userObj.barcode=this.bcode
   this.userObj.createdDate=this.cdate
   this.userObj.expiredDate=this.edate
   this.userObj.price=this.pricee
   this.userObj.quantity=this.quant

    // console.log(this.userObj);

  this.user.addproduct(this.userObj).subscribe(data=>{
    console.log(data);
    // this.crud=data;
  })
  location.reload();
  }

  edit(item){

    console.log(item);
    
    this.checkEdit=true;
    this.id._id=item._id;
    this.id.formContain=item.formContain;
    this.id.productName=item.productName;
    this.id.barcode=item.barcode;
    this.id.createdDate=item.createdDate;
    this.id.expiredDate=item.expiredDate;
    this.id.price=item.price;
    this.id.quantity=item.quantity;
    }

  update(){
    console.log(this.id)
    this.user.updateData(this.id).subscribe(data=>{
      console.log(data);
    });
    location.reload();
  }

  delete(id){
    console.log(id);
    this.user.deleteData(id).subscribe(data=>{
      console.log(data);
      location.reload();
    })
  }
  ngOnInit(): void {
  }


}
