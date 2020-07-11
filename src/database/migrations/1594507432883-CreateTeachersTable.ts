import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateTeachersTable1594507432883
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teachers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'room',
            type: 'varchar',
          },
          {
            name: 'avatar_url',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'course_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'laboratory_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'area_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'teachers',
      new TableForeignKey({
        name: 'TeacherCourse',
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'teachers',
      new TableForeignKey({
        name: 'TeacherLaboratory',
        columnNames: ['laboratory_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'laboratories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'teachers',
      new TableForeignKey({
        name: 'TeacherArea',
        columnNames: ['area_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'areas',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('teachers', 'TeacherArea');
    await queryRunner.dropForeignKey('teachers', 'TeacherLaboratory');
    await queryRunner.dropForeignKey('teachers', 'TeacherCourse');
    await queryRunner.dropTable('teachers');
  }
}
