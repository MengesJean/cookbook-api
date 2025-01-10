import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { promisify } from 'util';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

const unlinkAsync = promisify(fs.unlink);

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.booksRepository.save(createBookDto);
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(id: string) {
    return this.booksRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    if (updateBookDto.image) {
      const oldBook = await this.findOne(id);
      if (oldBook && oldBook.image) {
        try {
          await unlinkAsync(oldBook.image);
        } catch (error) {
          console.error('Error deleting old image:', error);
        }
      }
    }
    return this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: string) {
    const book = await this.findOne(id);
    if (book && book.image) {
      try {
        await unlinkAsync(book.image);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    return this.booksRepository.delete(id);
  }
}
