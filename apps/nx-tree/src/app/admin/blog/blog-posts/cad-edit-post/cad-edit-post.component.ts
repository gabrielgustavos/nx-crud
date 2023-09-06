import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  AlertService,
  BaseComponent,
  DIALOG_DATA,
  DialogRef,
} from '@nx-org/components';
import { BlogFormGroup } from '@nx-org/forms';
import { BlogService } from '@nx-org/services';
import Quill from 'quill';
import { take } from 'rxjs';

@Component({
  selector: 'nx-org-cad-edit-post',
  templateUrl: './cad-edit-post.component.html',
  styleUrls: ['./cad-edit-post.component.scss'],
})
export class CadEditPostComponent extends BaseComponent implements OnInit {
  htmlText = '';
  htmlTextSize: any;
  htmlTextColor: any;
  htmlTextFont: any;
  quillConfig?: any;
  textoSalvo = false;
  form: BlogFormGroup = new BlogFormGroup();
  titulo = '';
  private blogService = inject(BlogService);

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef
  ) {
    super();
  }

  ngOnInit() {
    this.form.patchValue(this.data);
    if (this.data === null) {
      this.titulo = 'Cadastro de Post';
    } else {
      this.titulo = 'Editar Post';
      this.form.patchValue(this.data);
    }
    const Size = Quill.import('attributors/style/size');
    Size.whitelist = [
      '10px',
      '12px',
      '14px',
      '16px',
      '18px',
      '20px',
      '22px',
      '24px',
    ];
    Quill.register(Size, true);

    this.quillConfig = {
      toolbar: {
        container: [
          [{ font: [] }],
          [
            {
              size: [
                '10px',
                '12px',
                '14px',
                '16px',
                '18px',
                '20px',
                '22px',
                '24px',
              ],
            },
          ],

          ['bold', 'italic', 'underline', 'strike'],
          [{ align: [] }],
          [{ color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          ['blockquote'],
          ['link', 'image', 'video'],
        ],
      },
    };
  }

  onContentChanged = (event: any) => {
    this.htmlText = event.html;
    const size = event.content.ops[0].attributes.size;
    const color = event.content.ops[0].attributes.color;
    const font = event.content.ops[0].attributes.font;
    this.htmlTextSize = size;
    this.htmlTextColor = color;
    this.htmlTextFont = font;
  };

  salvar() {
    const { valid } = this.form;
    if (valid && this.data === null) {
      this.addClient();
    } else {
      this.editClient();
    }
  }

  private addClient() {
    const { value } = this.form;

    this.blogService
      .postBlogPost(value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {},
      });
  }

  private editClient() {
    this.blogService
      .putBlogPost(this.data.id, this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {},
      });
  }
}
