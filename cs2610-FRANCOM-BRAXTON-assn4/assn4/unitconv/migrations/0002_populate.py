from django.db import migrations


class Migration(migrations.Migration):

    def populate_db(apps, schema_editor):

        #Blog = apps.get_model('blog', 'Blog')
        #Comments = apps.get_model('blog', 'Comments')
        unitConversions = apps.get_model('unitconv', 'unitConversions')

        #unitConversions
        T = unitConversions(unit="T", conversion_factor=".0000342857")
        T.save()
        lb = unitConversions(unit="lb", conversion_factor=".06857")
        lb.save()
        kg = unitConversions(unit="kg", conversion_factor=".0311")
        kg.save()
        g = unitConversions(unit="g", conversion_factor="31.103")
        g.save()
        oz = unitConversions(unit="oz", conversion_factor="1.097")
        oz.save()
        t_oz = unitConversions(unit="t_oz", conversion_factor="1.0")
        t_oz.save()

    dependencies = [
        ('unitconv', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate_db),
    ]
