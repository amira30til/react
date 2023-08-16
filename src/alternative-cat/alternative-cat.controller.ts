import { Controller } from '@nestjs/common';
import { AlternativeCatService } from './alternative-cat.service';

@Controller('alternative-cat')
export class AlternativeCatController {
  constructor(private readonly alternativeCatService: AlternativeCatService) {}
}
