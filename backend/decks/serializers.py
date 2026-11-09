from rest_framework import serializers


class DeckSerializer(serializers.Serializer):
    class Meta:
        fields = '__all__'
        model = 'Deck'