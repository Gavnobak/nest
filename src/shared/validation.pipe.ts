import {
    Injectable,
    ArgumentMetadata,
    PipeTransform,BadRequestException,
} from '@nestjs/common';

@Injectable()
export class IdMongoValidationPipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string {
        if (typeof value !== 'string' || value.length !== 24) {
            throw new BadRequestException('Invalid ID');
        }
        return value;
    }
}