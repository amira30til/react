import { Module } from '@nestjs/common';
import { AlternativeCatService } from './alternative-cat.service';
import { AlternativeCatController } from './alternative-cat.controller';

@Module({
  controllers: [AlternativeCatController],
  providers: [AlternativeCatService]
})
export class AlternativeCatModule {}
