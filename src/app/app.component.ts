import { AppServiceService } from './services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  itemForm: FormGroup;
  fileToUpload: File;

  constructor(private appService: AppServiceService) { }

  fileSelected(event) {
    console.log(event.target.value);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const form = this.itemForm;
      reader.readAsDataURL(file);
      reader.onload = (function () {
        form.get('itemPhoto').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      });
    }

  }

  ngOnInit() {
    this.itemForm = new FormGroup({
      itemPhoto: new FormControl(),
      itemTitle: new FormControl('', Validators.required),
      itemDescription: new FormControl('', Validators.required)
    });
  }

  formSubmit() {
    console.log(this.itemForm.value);
    this.appService.uploadItem(this.itemForm.value).subscribe(function (result) {
      console.log(result);

    });
    this.itemForm.reset();
  }

}
